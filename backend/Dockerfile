# Image from python
FROM python:3.8.2

WORKDIR /backend

# Copy requirements.txt to container
COPY ./requirements.txt /backend/requirements.txt

# Install requirements
RUN pip install --no-cache-dir --upgrade -r /backend/requirements.txt

# Copy source code to container
COPY ./app /backend/app

# Run the app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]