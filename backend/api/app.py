import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from mlModel import get_movie_recommendations
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

class Data(BaseModel):
    movie_title: str | None = None
    filter_type: str | None = None
    filter_value: str | None = None

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def index():
    return {'message': 'Hi from sandeep'}

# @app.post()

@app.get("/popular")
async def get_popular_movie():
    df = pd.read_csv("movies.csv", sep = ",")
    sorted_df = df.sort_values(by=["popularity"], ascending=False)
    rows = sorted_df.head().to_dict(orient="records")

    return JSONResponse(content=jsonable_encoder(rows))

@app.post('/recommend')
async def predict_movie(data:Data):
    recList = get_movie_recommendations(data.movie_title,data.filter_type,data.filter_value)
    
    df = pd.read_csv("movies.csv", sep = ",")

    rowData = []

    for i in range(len(recList)):
        row = df[df["original_title"]== recList[i]].fillna(pd.NA)
        rowData.append(row.to_dict(orient="records"))

    res = {
        "recList": recList, #list of recommended movies
        "rows": rowData     #list of row of each movie
    }

    return JSONResponse(content=jsonable_encoder(res))
    

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)