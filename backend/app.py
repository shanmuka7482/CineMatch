import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from mlModel import get_movie_recommendations
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

class Data(BaseModel):
    movie_title: str | None = None
    filter_type: str | None = None
    filter_value: str | None = None

app = FastAPI()

@app.get('/')
def index():
    return {'message': 'Movie recommendation system'}

@app.post('/recommend')
async def predict_movie(data:Data):
    val = get_movie_recommendations(data.movie_title,data.filter_type,data.filter_value)
    
    return JSONResponse(content=jsonable_encoder(val))
    

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)