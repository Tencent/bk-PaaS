### 功能描述

删除服务分类

### 请求参数

{{ common_args_desc }}

#### 接口参数

| 字段                 |  类型      | 必选	   |  描述                 |
|----------------------|------------|--------|-----------------------|
| bk_supplier_account  | string     |是     | 开发商ID       |
| id            | int  | 是   | 服务分类ID |

### 请求参数示例

```python
{
  "bk_biz_id": 1,
  "id": 6
}
```

### 返回结果示例

```python
{
  "result": false,
  "code": 1199054,
  "message": "内置结点，禁止删除",
  "data": ""
}
```

### 返回结果参数说明

#### response

| 名称  | 类型  | 描述 |
|---|---|---|
| result | bool | 请求成功与否。true:请求成功；false请求失败 |
| code | int | 错误编码。 0表示success，>0表示失败错误 |
| message | string | 请求失败返回的错误信息 |
| data | object | 请求返回的数据 |
