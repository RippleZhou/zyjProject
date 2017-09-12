import {Injectable} from "@angular/core";
declare var $:any;
/**
 * Created by albert on 17/5/11.
 */
@Injectable()
export class  WfToast {
    time:number=2500;
    toast(type,msg){
        // console.log($('#alert-container .head-toast'));
        // console.log($('#alert-container'));
        // if($('#alert-container .head-toast').length>0){
        //     return
        // }else{
        //     let template = "<div class='head-toast'><header class='toast-"+type+"'><span>"+msg+"</span></header></div>"
        //     $('#alert-container').append(template);
        //     console.log($('#alert-container'));
        //     $('#alert-container .head-toast').eq(0).css('animation','head-toast 3.1s ease-in-out');
        //     setTimeout(()=>{
        //         $('#alert-container').empty();
        //     },this.time)
        // }
    }

    msg(msg:any){
        this.toast('info',msg);
        console.log('toastInfo:',msg)
    }

    error(error:any){
        this.toast('error',error);
        console.log('toastError:',error)
    }
}
