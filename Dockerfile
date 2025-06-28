FROM python:3.13.5-bookworm

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

CMD ["/bin/bash"]

