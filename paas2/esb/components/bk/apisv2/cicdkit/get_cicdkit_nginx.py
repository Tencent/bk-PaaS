# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS
Community Edition) available.
Copyright (C) 2017-2018 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
"""

from common.constants import API_TYPE_Q, HTTP_METHOD
from components.component import Component

from .toolkit import configs


class GetCicdkitNginx(Component):
    suggest_method = HTTP_METHOD.GET
    label = u"获取后台域名"
    label_en = "get cicdkit nginx"

    sys_name = configs.SYSTEM_NAME
    api_type = API_TYPE_Q

    host = configs.host

    def handle(self):
        self.response.payload = self.outgoing.http_client.get(
            self.host,
            "/api/v1/getCicdkitNginx",
        )
