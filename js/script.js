let userPoints = 5000;

        document.addEventListener("DOMContentLoaded", function() {
            atualizacaoDePontos();
        });

        function atualizacaoDePontos() {
            document.getElementById("user-points").textContent = userPoints.toString().padStart(4, '0');
        }

        function redeemReward(points) {
            if (userPoints >= points) {
                userPoints -= points;
                atualizacaoDePontos();
                alert("Recompensa resgatada com sucesso!");
            } else {
                alert("Pontos insuficientes para resgatar esta recompensa.");
            }
        }