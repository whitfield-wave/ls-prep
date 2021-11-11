function factorial2(n) {
    if (n < 2) return n;
    return n * factorial2(n-1);
}