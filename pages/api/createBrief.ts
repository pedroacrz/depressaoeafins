/* eslint-disable import/no-anonymous-default-export */

import { NextResponse, NextRequest } from 'next/server'
import executeQuery from '../../lib/db'

export default async (req: any, res: any) => {
    if (req.method != 'POST') {
        return res.json({ error: 'Method not allowed' })
    }
    if (req.body && !req.body.title) {
        return res.json({ message: 'Preencha o título' })
    }
    if (req.body && !req.body.content) {
        return res.json({ message: 'Preecha o conteúdo' })
    }
    try {
        const result = await executeQuery({
            query: 'INSERT INTO brief (title, content) VALUES (?,?)',
            values: [req.body.title, req.body.content]
        })

        return res.json(result);
    }
    catch (error) {
        console.log(error);
    }
}