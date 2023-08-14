import Link from "next/link";
import { useState } from "react";
import { css } from "../../../styled-system/css"
import { HiMiniBeaker } from "react-icons/hi2";

type Props = { children: any }

function Sidebar({ children }: Props) {
    const [hover, setHover] = useState(false)
    return (
        <aside className={css({
            position: 'relative',
            width: '4.5rem',
            zIndex: '15',
            backgroundColor: '#101318',
            height: '100vh',
            transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1)',
            _hover: { width: '15rem' }
        })}
        >
            <div className="group">
                <div className={css({
                    left: '0',
                    width: '4.5rem',
                    borderRight: '1px solid #272822',
                    position: 'absolute',
                    height: '100%',
                    padding: '0.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gridGap: '1rem',
                    fontSize: '1rem',
                    transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: '0 0 .5rem',
                    _hover: { width: '15rem' },
                })}
                    onMouseLeave={() => setHover(false)}
                    onMouseEnter={() => setHover(true)}
                >
                    <div id="Logo" className={css({
                        margin: '0.5rem 0.5rem'
                    })}>
                        <Link href="/" className={
                            css({
                                position: 'relative',
                                cursor: 'pointer',
                                color: 'eggshell',
                                borderRadius: '5px',
                                width: '3rem',
                                display: 'flex',
                                alignItems: 'center',
                                boxSizing: 'border-box',
                                transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1)',
                                padding: '0',
                                overflow: 'hidden',
                                justifyContent: 'left',

                                _groupHover: { width: '15rem' }
                            })
                        }>
                            <HiMiniBeaker className={css({ fontSize: '2rem' })} />
                            <h1 className={css({
                                opacity: '0',
                                position: 'absolute',
                                marginLeft: '3rem',
                                transition: 'opacity 0.3s cubic-bezier(0.16,1,0.3,1)',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                textAlign: 'left',
                                maxWidth: '15ch',
                                overflow: 'hidden',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                color: 'textCol',
                                _groupHover: { opacity: '1' }
                            })}>
                                REAXT
                            </h1>
                        </Link>
                    </div>
                    <div id="MainMenu" className={css({})}></div>
                    <div id="AuthMenu" className={css({})}></div>

                </div>
            </div >

        </aside >
    )
}

export default Sidebar

//             