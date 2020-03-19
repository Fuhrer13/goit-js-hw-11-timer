class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.day = document.querySelector('[data-value="days"]');
    this.hour = document.querySelector('[data-value="hours"]');
    this.min = document.querySelector('[data-value="mins"]');
    this.sec = document.querySelector('[data-value="secs"]');

    this.action = this.action.bind(this);
    this.timerId = setInterval(this.action, 1000);
  }

  action() {
    const time = this.targetDate - Date.now();

    const day = Math.floor(time / (1000 * 60 * 60 * 24));
    this.day.textContent = day;

    const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.hour.textContent = hour < 10 ? '0' + hour : hour;

    const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    this.min.textContent = min < 10 ? '0' + min : min;

    const sec = Math.floor((time % (1000 * 60)) / 1000);
    this.sec.textContent = sec < 10 ? '0' + sec : sec;
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});

countdownTimer.action();
