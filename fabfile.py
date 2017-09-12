#!/usr/bin/env python
# -*- coding: utf-8 -*-
from fabric.api import run, env, roles, cd, execute, put, lcd, local

env.roledefs = {
    'cdn': ['root@139.129.32.65:22', ],
}
env.passwords = {
    'root@139.129.32.65:22': '0stenGar',
}

@roles('cdn')
def static():
    with lcd('www'):
        local('tar czf ../deploy.tar.gz .') # 压缩本地包
    put('deploy.tar.gz', '/home/deploys/qgy-wechat/deploy.tar.gz')
    local('rm deploy.tar.gz')
    with cd('/home/deploys/qgy-wechat'):
        run('tar zxf deploy.tar.gz')
        run('rm deploy.tar.gz')


def deployDev():
    local('ionic build')
    local('gulp uglify')
    execute(static)
