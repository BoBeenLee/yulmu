import { css } from "react-emotion";

export const breakpoints = {
    mobile: 767,
    desktop: 1180
}

export const mq = Object.keys(breakpoints).reduce(
    (accumulator, label) => {
        let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
        let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
        accumulator[label] = cls =>
            css`
				@media (${prefix + breakpoints[label] + suffix}) {
					${cls};
				}
			`
        return accumulator
    },
    {}
)