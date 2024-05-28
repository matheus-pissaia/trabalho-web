import type { Config } from 'tailwindcss'

export default {
    content: [],
    theme: {
        spacing: {
            0: '0',
            4: '4px',
            8: '8px',
            12: '12px',
            16: '16px',
            18: '18px',
            20: '20px',
            24: '24px',
            28: '28px',
            32: '32px',
            36: '36px',
            40: '40px',
            48: '48px',
            56: '56px',
            64: '64px',
            72: '72px',
            80: '80px',
            88: '88px',
            96: '96px',
            104: '104px',
            112: '112px',
            120: '120px',
            128: '128px',
            136: '136px',
            144: '144px',
            152: '152px',
            160: '160px',
            168: '168px',
            176: '176px',
            184: '184px',
            192: '192px',
            200: '200px',
            208: '208px',
            216: '216px',
            224: '224px',
            232: '232px',
            240: '240px',
            248: '248px',
            256: '256px',
            264: '264px',
            272: '272px',
            280: '280px',
            288: '288px',
            296: '296px',
            576: '576px',
            '1/2': '50%',
        },

        fontSize: {
            12: '12px',
            14: '14px',
            16: '16px',
            18: '18px',
            20: '20px',
            24: '24px',
            32: '32px',
            40: '40px',
            48: '48px',
            56: '56px',
        },

        fontWeight: {
            400: '400',
            500: '500',
            600: '600',
            700: '700',
        },

        lineHeight: {
            1: '1',
            1.1: '1.1',
            1.25: '1.25',
            1.5: '1.5',
            2: '2',
        },

        borderRadius: {
            10: '8px',
            16: '16px',
            32: '32px',
            full: '9999px',
        },

        extend: {
            backgroundImage: {
                home: 'url(\'/assets/images/home.avif\')',
                login: 'url(\'/assets/images/login.jpg\')',
            },
        },
    },
    plugins: [],
} satisfies Config
