document.addEventListener('DOMContentLoaded', function () {
    const dealButton = document.getElementById('deal-button');
    const playerHand = document.getElementById('player-hand');
    const bankerHand = document.getElementById('banker-hand');

    dealButton.addEventListener('click', function () {
        // 간단한 로직으로 플레이어와 뱅커의 카드를 랜덤하게 지정
        const playerCard = Math.floor(Math.random() * 10) + 1;
        const bankerCard = Math.floor(Math.random() * 10) + 1;

        // 화면에 표시
        playerHand.textContent = `Player: ${playerCard}`;
        bankerHand.textContent = `Banker: ${bankerCard}`;
    });
});
