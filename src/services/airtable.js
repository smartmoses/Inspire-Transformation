import axios from 'axios'


// Configure these via environment variables
const AIRTABLE_BASE = import.meta.env.VITE_AIRTABLE_BASE
const AIRTABLE_TABLE = import.meta.env.VITE_AIRTABLE_TABLE || 'Leads'
const AIRTABLE_KEY = import.meta.env.VITE_AIRTABLE_KEY


export async function submitPartnership({ name, email, type, message }){
    if(!AIRTABLE_KEY) throw new Error('Airtable key not set')
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${encodeURIComponent(AIRTABLE_TABLE)}`
    const record = { fields: { Name: name, Email: email, Type: type, Message: message } }
    const res = await axios.post(url, { records: [record] }, {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}`, 'Content-Type': 'application/json' }
    })
    return res.data
}

export async function fetchPrograms() {
    if(!AIRTABLE_KEY) throw new Error('Airtable key not set')
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Programs`
    const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
    })
    return res.data.records.map(record => ({
        id: record.id,
        ...record.fields
    }))
}

export async function fetchImpactStats() {
    if(!AIRTABLE_KEY) throw new Error('Airtable key not set')
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Impact`
    const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
    })
    return res.data.records.map(record => ({
        id: record.id,
        ...record.fields
    }))
}

// Set VITE_AIRTABLE_BASE, VITE_AIRTABLE_KEY, and optionally VITE_AIRTABLE_TABLE in .env (do NOT commit keys to git)