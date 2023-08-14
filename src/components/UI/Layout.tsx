import React, { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import Sidebar from './Sidebar';

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {

    return (
        <>
            <main>
                <div className={css({
                    containerType: 'inline-size',
                    containerName: 'app',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'screen'
                })}>
                    {/* progressBar */}
                    <div className={css({
                        display: 'flex',
                        position: 'relative',
                        alignItems: 'stretch',
                        flex: '1',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        backgroundColor: '#0f1015',
                        overflowX: 'hidden',
                    })}>
                        <Sidebar children={undefined} />
                        {children}
                    </div>
                </div>
            </main>
        </>

    )
}

export default Layout