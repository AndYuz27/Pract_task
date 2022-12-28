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


def get_data_from_json(json_file):
    """извлекаем из json интересующие нас данные"""
    data_list = []
    for data in json_file["data"]["products"]:
        try:
            price = int(data["priceU"] / 100)
        except:
            price = 0
        data_list.append({
            "name_prod": data["name"],
            "id": data["id"],
            "sale": data["sale"],
            "price": price,
            "sale_price": int(data["salePriceU"] / 100),
            "brand": data["brand"],
            "brand_id": int(data["brandId"]),
            "feedbacks": data["feedbacks"],
            "rating": data["rating"],
            "link": f"https://www.wildberries.ru/catalog/{data['id']}/detail.aspx?targetUrl=BP"
        })
    # print(data_list)
    return data_list

#shard, query, low_price=None, top_price=None

def get_content():
    # вставляем ценовые рамки для уменьшения выдачи, вилбериес отдает только 100 страниц
    headers = {"Accept": "*/*", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    data_list = []
    for page in range(1):
        print(f"Сбор позиций")

        url = f"https://catalog.wb.ru/catalog/rooms/catalog?appType=1&curr=rub&dest=-1075831,-77677,-398551,12358499&locale=ru&page=1&priceU=200000;3000000&reg=0&regions=64,83,4,38,80,33,70,82,86,30,69,1,48,22,66,31,40&sort=popular&spp=0&subject=4806;7612;7696;7697;7698" #\
        #      f"&locale=ru&page=1&priceU={low_price * 100};{top_price * 100}" \
         #     f"&reg=0&regions=64,83,4,38,80,33,70,82,86,30,69,1,48,22,66,31,40&sort=popular&spp=0&{query}"

#https://catalog.wb.ru/catalog/{shard}/catalog?appType=1&curr=rub&dest=-1075831,-77677,-398551,12358499&locale=ru&page=1&priceU={low_price * 100};{top_price * 100}&reg=0&regions=64,83,4,38,80,33,70,82,86,30,69,1,48,22,66,31,40&sort=popular&spp=0&{query}
#https://catalog.wb.ru/catalog/rooms/catalog?appType=1&curr=rub&dest=-1075831,-77677,-398551,12358499&locale=ru&page=1&priceU=200000;3000000&reg=0&regions=64,83,4,38,80,33,70,82,86,30,69,1,48,22,66,31,40&sort=popular&spp=0&subject=4806;7612;7696;7697;7698
        print(url)
        r = requests.get(url, headers=headers)
        data = r.json()
        print(f"Добавлено позиций: {len(get_data_from_json(data))}")
        # print(get_data_from_json(data))
        if len(get_data_from_json(data)) > 0:
            data_list.extend(get_data_from_json(data))
        else:
            print(f"Сбор данных завершен.")
            break
    print(data_list)
    return data_list


get_content()