## Regras do Jogo
<br>

- **1** Ao bater nas laterais da area do jogo, a bola deverá ser rebatida no sentido oposto.

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

- **2** Ao bater nas RAQUETES dos jogador adversario, a bola deverá ser rebatida no sentido oposto.
```
se o positionBallX for menor que 0
   verifica se bateu na raquete
   verifica a pontuacao
```

 - **3** Ao cruzar a linha do ADVERSARIO (rede), sem tocar na raquete, deverá somar 1 ponto, e iniciar a bola ao meio do campo.