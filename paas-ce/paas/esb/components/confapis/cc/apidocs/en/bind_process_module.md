### Functional description

bind process to module

### Request Parameters

{{ common_args_desc }}

#### General Parameters

| Field       |  Type    | Required	   |  Description         |
|------------|----------|--------|---------------|
| bk_supplier_account | string   | Yes    | Supplier account      |
| bk_biz_id  | int   | string     | Bussiness ID       |
| bk_process_id | int   | string     | Process ID  |
| bk_module_name  | string   | string     | Module Name     |


### Request Parameters Example

```python
{
    "bk_supplier_account":"0",
    "bk_biz_id":3,
    "bk_process_id":14,
    "bk_module_name":"db"
}
```


### Return Result Example

```python

{
    "result": true,
    "code": 0,
    "message": "",
    "data":""
}
```
