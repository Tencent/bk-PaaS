/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

export default {
    name: 'upload',
    type: 'bk-upload',
    displayName: '文件上传',
    icon: 'bk-drag-upload',
    group: '表单',
    order: 1,
    events: [{
        name: 'on-done', tips: '所有文件上传完毕后的事件，回调参数（fileList）'
    }, {
        name: 'on-progress', tips: '文件上传进行时的事件，回调参数（e, file，fileList）'
    }, {
        name: 'on-success', tips: '文件上传成功后的事件，回调参数（file，fileList）'
    }, {
        name: 'on-error', tips: '文件上传失败后的事件，回调参数（file，fileList）'
    }],
    styles: ['size', 'margin'],
    props: {
        accept: {
            type: 'string',
            val: '*',
            tips: '可选的文件类型，参考 input 元素的 accept 属性'
        },
        url: {
            type: 'string',
            val: 'https://jsonplaceholder.typicode.com/posts/',
            tips: '服务器地址'
        },
        // array object
        header: {
            type: ['array', 'object'],
            val: [],
            tips: '请求头 { name: " ", value: " " }'
        },
        name: {
            type: 'string',
            val: 'upload_file',
            tips: '后台读取文件的 key'
        },
        // Number, Object 限制上传文件体积 { maxFileSize: 1, maxImgSize: 1 }
        size: {
            type: ['number', 'object'],
            val: 5,
            tips: '限制上传文件体积 { maxFileSize: 1, maxImgSize: 1 }'
        },
        tip: {
            type: 'string',
            tips: '提示信息'
        },
        'delay-time': {
            type: 'number',
            val: 0,
            tips: '上传完毕后列表消失时间'
        },
        multiple: {
            type: 'boolean',
            val: true,
            tips: '是否支持多选'
        },
        'with-credentials': {
            type: 'boolean',
            val: false,
            tips: '是否允许带上 cookie'
        },
        'ext-cls': {
            type: 'string',
            tips: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM 上'
        }
    }
}
