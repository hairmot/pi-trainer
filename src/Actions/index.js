export function check_pi(value) {
    return {
        type: "CHECK",
        value
    }
}

export function restart() {
    return {
        type: "RESTART"
    }
}