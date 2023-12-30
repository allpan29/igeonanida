document.addEventListener('DOMContentLoaded', function () {
    const dealButton = document.getElementById('deal-button');
    const playerHand = document.getElementById('player-hand');
    const bankerHand = document.getElementById('banker-hand');

    dealButton.addEventListener('click', function () {
        // 플레이어와 뱅커에게 2장의 카드를 뽑음
        const playerCard1 = Math.floor(Math.random() * 10) + 1;
        const playerCard2 = Math.floor(Math.random() * 10) + 1;
        const bankerCard1 = Math.floor(Math.random() * 10) + 1;
        const bankerCard2 = Math.floor(Math.random() * 10) + 1;

        // 플레이어와 뱅커의 합을 계산
        let playerTotal = playerCard1 + playerCard2;
        let bankerTotal = bankerCard1 + bankerCard2;

        // 합이 10 이상인 경우 일의 자리 수로 변환
        playerTotal %= 10;
        bankerTotal %= 10;

        // 화면에 표시
        playerHand.textContent = `Player: ${playerCard1}, ${playerCard2} (Total: ${playerTotal})`;
        bankerHand.textContent = `Banker: ${bankerCard1}, ${bankerCard2} (Total: ${bankerTotal})`;

        // 간단한 승패 판정 로직
        let result = '';
        if (playerTotal > bankerTotal) {
            result = 'Player Wins!';
        } else if (bankerTotal > playerTotal) {
            result = 'Banker Wins!';
        } else {
            result = 'Tie!';
        }

        // 결과를 알리는 간단한 알림 추가
        document.getElementById('result').textContent = result
    });
});
