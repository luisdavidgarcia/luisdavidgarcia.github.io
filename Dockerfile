FROM python:3.13.5-bookworm

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

#RUN git clone https://github.com/petrnohejl/minimal-xy.git themes/minimal-xy

#COPY . .

#RUN make html

#CMD ["make", "devserver"]

CMD ["/bin/bash"]

