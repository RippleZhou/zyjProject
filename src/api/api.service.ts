import {EventEmitter, Injectable} from "@angular/core";
import {Http, RequestMethod, RequestOptionsArgs, ResponseContentType, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {HttpUtils} from "../utils/http.utils";
import {Subscriber} from "rxjs/Subscriber";

export interface GeneralResponse<T> {
  code: number;
  message: T;
}

export interface GeneralArrayResponse<T> {
  code: number;
  message: Array<T>;
}

export interface GeneralPageResponse<T> extends GeneralResponse<PageResponse<T>> {

}
export interface PageResponse<T> {
  content: Array<T>;
  totalPages: number;
  last: boolean;
  first: boolean;
  totalElements: number;
  numberOfElements: number;
  size: number;
  sort?: string;
}
export class PageParam {
  public size?: number = 10;
  public page?: number = 0;
  public sort?: Array<string>;
}

@Injectable()
export class ApiService {
  private baseUrl = 'http://qingguoyu.api.test.ostengar.com/qingguoyu';
  private token = '460ef7728a10db6e60ff9c9447ddfbb1';
  private failedResponse = new EventEmitter<Response>();

  constructor(private http: Http, private httpUtils: HttpUtils) {
  }

  setToken(v) {
    console.log(`Update api token ${v}`);
    this.token = v;
  }

  // public getUrl(url: String): string {
  //   return `${this.baseUrl}/${url}`;
  // }

  public  page<T>(url: string, param?: PageParam): Observable<GeneralPageResponse<T>> {
    return this
      .get(url,
        {
          method: RequestMethod.Get,
          params: param,
          responseType: ResponseContentType.Json
        }
      );
  }

  public get<T>(url: string, opt?: RequestOptionsArgs): Observable<GeneralResponse<T>> {
    if (opt) {
      opt.method = RequestMethod.Get;
    } else {
      opt = {method: RequestMethod.Get};
    }
    return this.request(url, opt)
  }

  public post<T>(url: string, opt?: RequestOptionsArgs): Observable<GeneralResponse<T>> {
    if (opt) {
      opt.method = RequestMethod.Post;
    } else {
      opt = {method: RequestMethod.Post};
    }
    return this.request(url, opt)
  }

  public request<T>(url: string, opt?: RequestOptionsArgs): Observable<GeneralResponse<T>> {
    return this.requestDelegate(url, opt);
  }

  private requestOrigin<T>(url: string, opt?: RequestOptionsArgs): Observable<GeneralResponse<T>> {
    opt = this.beforeRequest(url, opt);
    opt.url = `${this.baseUrl}${opt.url}`;
    let res = this.http
      .request(this.baseUrl, opt)

    // 处理一开始便引起的异常, 大多为链接服务器或 cors 异常
    res.subscribe(() => {
    }, (err) => {
      console.error("Response Error", err);
      this.failedResponse.emit(err);
    });
    return res.map(v => this.beforeResponse(v)).map(res => res.json());
  }

  private requestDelegate<T>(url: string, opt?: RequestOptionsArgs): Observable<GeneralResponse<T>> {

    let isGet = false;
    switch (opt.method) {
      case 'GET':
      case RequestMethod.Get:
        isGet = true;
        break;
      case 'POST':
      case RequestMethod.Post:
        break;
      default:
        // 其他请求还是使用以前的方式
        return this.requestOrigin(url, opt);
    }

    opt = this.beforeRequest(url, opt);
    console.log('Request Delegate', opt);

    return Observable.create((sub: Subscriber<any>) => {
      let onSuccess = (msg) => {
        sub.next({code: 0, message: msg})
      };
      let onError = (e) => {
        sub.error(e);
        this.failedResponse.emit(e);
      };
      let onComplete = () => {
        console.log('Delegate onComplete');
        sub.complete()
      };
      let onSuccessNonZero = (msg) => {
        // 成功但 code != 0, 由于获取不到 code, 则随便设置一个
        sub.next({code: 1, message: msg})
      };

      if (isGet) {
        // this.httpUtils.get(opt.url, opt.params, onSuccess, onError, onComplete, onSuccessNonZero)
      } else {
        // 封装的方法无法传递 url 参数, 只能手动拼接
        // this.httpUtils.post(opt.url + this.httpUtils.transferGetParam(opt.params), opt.body, onSuccess, onError, onComplete, onSuccessNonZero)
      }
    });
  }

  public getFailedResponse(): Observable<any> {
    return this.failedResponse;
  }

  protected beforeResponse(r: Response): Response {
    if (r.status > 300) {
      this.failedResponse.emit(r)
    }
    // 预留以便于以后做处理
    console.log(`Response [ ok: ${r.ok} status: ${r.status} url: ${r.url} ]`, r);
    return r;
  }

  protected beforeRequest(url: string, opt?: RequestOptionsArgs): RequestOptionsArgs {
    if (opt == null) {
      opt = {};
    }
    if (!opt.params) {
      opt.params = {};
    }
    if (this.token) {
      opt.params['token'] = this.token;
    }
    if (!opt.url) {
      opt.url = url;
    }
    if (!opt.url.startsWith('/')) {
      opt.url = '/' + opt.url;
    }

    console.log(`Request [ url: ${url} ]`, opt);
    return opt;
  }
}
