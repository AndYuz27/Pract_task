import requests
import json
import pandas as pd


def get_cat_wb():
    print("Получение данных с Wildberries")
    url = "https://www.wildberries.ru/webapi/menu/main-menu-ru-ru.json"
    headers = {"Accept": "*/*", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    response = requests.get(url, headers=headers)
    data = response.json()
    with open("_wb_catalogs_data.json", "w", encoding="UTF-8") as file:
        json.dump(data, file, indent=2, ensure_ascii=False)
        print(f"Данные сохранены в wb_catalogs_data_sample.json")
    data_list = []
    for d in data:
        try:
            for child in d["childs"]:
                try:
                    category_name = child["name"]
                    category_url = child["url"]
                    shard = child["shard"]
                    query = child["query"]
                    data_list.append({
                        "category_name": category_name,
                        "category_url": category_url,
                        "shard": shard,
                        "query": query})
                except:
                    continue
                try:
                    for sub_child in child["childs"]:
                        category_name = sub_child["name"]
                        category_url = sub_child["url"]
                        shard = sub_child["shard"]
                        query = sub_child["query"]
                        data_list.append({
                            "category_name": category_name,
                            "category_url": category_url,
                            "shard": shard,
                            "query": query})
                        # print(data_list)
                except:
                    # print(f"не имеет дочерних каталогов *{i["name"]}*")
                    continue
        except:
            # print(f"не имеет дочерних каталогов *{d["name"]}*")
            continue
    return data_list
get_cat_wb()


def search_category_in_catalog(url, catalog_list):
    """пишем проверку пользовательской ссылки на наличии в каталоге"""
    try:
        for catalog in catalog_list:
            if catalog["category_url"] == url.split("https://www.wildberries.ru")[-1]:
                print(f'найдено совпадение: {catalog["category_name"]}')
                name_category = catalog["category_name"]
                shard = catalog["shard"]
                query = catalog["query"]
                return name_category, shard, query
            else:
                # print("нет совпадения")
                pass
    except:
        print("Данный раздел не найден!")
