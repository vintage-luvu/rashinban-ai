from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ScheduleRequest(BaseModel):
    user_id: str
    day: str

@app.get("/")
def read_root():
    return {"message": "Rashinban API is running."}

@app.head("/")
def head_root():
    return {"message": "Rashinban API is running."}


@app.post("/generate_schedule")
def generate_schedule(request: ScheduleRequest):
    # Placeholder implementation
    return {"schedule": f"This is a placeholder schedule for user {request.user_id} on {request.day}"}
