-- Paste and run this script in your Supabase SQL Editor to create the enquiries table securely.

CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    funding_amount TEXT NOT NULL,
    funding_speed TEXT NOT NULL,
    purpose TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    company_name TEXT NOT NULL,
    company_reg TEXT NOT NULL,
    monthly_value TEXT NOT NULL,
    debtor_company_name TEXT NOT NULL,
    debtor_company_number TEXT NOT NULL,
    debtor_contact_person TEXT NOT NULL,
    is_late TEXT NOT NULL,
    is_new_client TEXT NOT NULL,
    gdpr_consent BOOLEAN NOT NULL DEFAULT FALSE
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (so your public form works) 
-- Ensure they can only INSERT, but NOT READ other people's data!
CREATE POLICY "Allow public inserts" ON public.enquiries
    FOR INSERT 
    WITH CHECK (true);
