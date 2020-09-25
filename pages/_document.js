import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <head>
                    <title>Anthony Fink</title>
                    <Head/>
                </head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
