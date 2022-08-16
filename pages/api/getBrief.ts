/* eslint-disable import/no-anonymous-default-export */

import { NextResponse, NextRequest } from 'next/server'
import executeQuery from '../../lib/db'

export default async (req: any, res: any) => {
    if (req.method != 'GET') {
        return res.json({ error: 'Method not allowed' })
    } 
    try {
        const result = await executeQuery({
            query: 'SELECT * FROM brief',
            values: []
        })

        return res.json(result);
    }
    catch (error) {
        console.log(error);
    }
}