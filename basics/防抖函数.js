function sow(fn, dur){
    timer && clearInterval(timer);
    return () => {
        timer = setTimeout(fn,dur)
    }
}