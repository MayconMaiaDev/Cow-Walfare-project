#include "DHT.h"

#define DHTPIN A0

#define DHTTYPE DHT11 //DHT 11

DHT dht (DHTPIN, DHTTYPE);

void setup()
{
  Serial.begin(9600);
  
  dht.begin();
}

void loop()
{
  //A leitura da temperatura e umidade pode levar 250ms!
  //O atraso do sensor pode chegar a 2 segundos
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  //testa se retorno é valid, caso contrário algo está errado.
  if (isnan(t) || isnan(h))
  {
    Serial.println("Failed to read from DHT");
  }
  else
  {
    
  Serial.print(t);
  Serial.print(":");
  Serial.println(h); 
  }
  delay (5000);
}
