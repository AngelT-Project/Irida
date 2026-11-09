/*
# Create booking requests, contact messages, and newsletter signups

1. New Tables
- `booking_requests`: stores each booking request from the website (arrival date, departure date, guests, suite, and visitor details).
- `contact_messages`: stores messages sent through the contact form.
- `newsletter_subscribers`: stores email addresses that opted in to the newsletter (each email stored once).

2. Security
- Row level security is enabled on all three tables.
- Website visitors (anon role) can only INSERT new rows. They cannot read, change, or delete existing rows, so private guest details stay private.
- No UPDATE or DELETE access is granted to website visitors.

3. Notes
- Staff review these records in the project's database dashboard.
- The newsletter table enforces unique emails so the same address cannot be stored twice.
*/

CREATE TABLE IF NOT EXISTS booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  arrival_date date NOT NULL,
  departure_date date NOT NULL,
  guests integer NOT NULL CHECK (guests BETWEEN 1 AND 10),
  suite_name text,
  guest_name text NOT NULL,
  guest_email text NOT NULL,
  guest_phone text,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (departure_date > arrival_date)
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE booking_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON booking_requests TO anon, authenticated;
GRANT INSERT ON contact_messages TO anon, authenticated;
GRANT INSERT ON newsletter_subscribers TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_booking_requests" ON booking_requests;
CREATE POLICY "anon_insert_booking_requests" ON booking_requests FOR INSERT
TO anon, authenticated
WITH CHECK (char_length(guest_name) BETWEEN 1 AND 120 AND char_length(guest_email) BETWEEN 3 AND 254);

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (char_length(full_name) BETWEEN 1 AND 120 AND char_length(email) BETWEEN 3 AND 254 AND char_length(message) BETWEEN 1 AND 2000);

DROP POLICY IF EXISTS "anon_insert_newsletter_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter_subscribers" ON newsletter_subscribers FOR INSERT
TO anon, authenticated
WITH CHECK (char_length(email) BETWEEN 3 AND 254);
