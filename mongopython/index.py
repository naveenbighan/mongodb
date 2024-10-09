import pymongo

myclient = pymongo.MongoClient('mongodb://localhost:27017/')

mydb = myclient['Naveen']
collection=mydb["something"]
dict={"name":"naveen","age":"25","job":"web developer"}
collection.insert_one(dict)


