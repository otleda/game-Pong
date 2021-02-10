## Regras do Jogo
<br>

- **1** Ao bater nas laterais da area do jogo, ou nas raquetes, a bola deverá ser rebatida no sentido oposto.

**Eixo Y**

```
positionBallY = 0

    se a positionBallY no eixo Y for menor que 0
        muda a posicao da bola


    se a positionBallY no eixo Y for maior que a altura do campo
        muda a posicao da bola
```
**Eixo X**

```
positionBallX = 0

    se a positionBallX no eixo X for menor que 0
        muda a posicao da bola


    se a positionBallX no eixo X for maior que a largura do campo
        muda a posicao da bola
```

 - **2** Ao cruzar a linha do adversário (rede), sem tocar na raquete, deverá somar 1 ponto, e iniciar a bola ao meio do campo.