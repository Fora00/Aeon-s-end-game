export const deciderPosition = (
    postion: 'top' | 'left' | 'bottom' | 'right' | 'default'
): string => {
    return {
        top: 'fixed top-0 h-fit w-full',
        left: 'fixed left-0 h-full w-fit',
        bottom: 'fixed bottom-0 h-fit w-full',
        right: 'fixed right-0 h-full w-fit',
        default:
            'relative my-6 mx-auto w-auto md_screen:max-w-lg sm_screen:max-w-sm lg_screen:max-w-3xl',
    }[postion] as string
}

export const findKeyWithTrueValue = (obj: Record<string, boolean>): string => {
    for (const [key, value] of Object.entries(obj)) {
        if (value) {
            return key
        }
    }
    return ''
}
