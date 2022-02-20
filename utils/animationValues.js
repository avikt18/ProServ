const container = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}
const mainCard = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        }
    }
}

const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const cardAnimation = {
    hiddenSvg: {
        y: 80,
        opacity: 0,
    },
    visibleSvg: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        }
    }
}


const headingAnimation = {
    LgInitialHeading: {
        y: 50,
        opacity: 0,
    },
    SmInitialHeading: {
        y: 20,
        opacity: 0,
    },
    visibleHeading: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        }
    },
    exitHeading: {
        opacity: 0,
    },
}

export { container, child, cardAnimation, headingAnimation, mainCard }