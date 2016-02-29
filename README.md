# My very first docker & JS app!
Very trivial but feeling very impressed, this is a docker container that will get mockaroo and output 
to the log some mocked up transaction data.

```
docker build -t "myfirstmockaroo" .
docker images
docker run -p 49160:8080 -d myfirstmockaroo
# copy guid
docker logs <guid>
```