// Paste your Supabase values here (Project Settings > API). The anon key is safe to expose.
window.CFG = {
    URL: "https://gzycleoezmppljinirdy.supabase.co",
    KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6eWNsZW9lem1wcGxqaW5pcmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzMjUzNzcsImV4cCI6MjEwODkwMTM3N30.SkWNik--LvP20n2j461Aocvp2KKhLQqMAmW3qMprvGY",
    SITE: "My Deals Store"
};
// Safety: remove any "/rest/v1/" or trailing slash if pasted by mistake
window.CFG.URL = window.CFG.URL.replace(/\/(rest|auth|storage)\/v1.*$/, "").replace(/\/+$/, "");