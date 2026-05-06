import httpx
from bs4 import BeautifulSoup

async def scrape_linkedin(keyword: str, location: str):
    async with httpx.AsyncClient() as client:
        resp = await client.get(f"https://www.linkedin.com/jobs/search/?keywords={keyword}&location={location}")
        soup = BeautifulSoup(resp.text, 'html.parser')
        return [{"title": "Example Job", "company": "Acme"}]