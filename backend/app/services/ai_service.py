import openai
from app.config import settings

openai.api_key = settings.OPENAI_API_KEY

async def generate_rewrite(bullet_text: str, style: str) -> str:
    prompt = f"Rewrite the following achievement bullet in {style} style (Action + Metric + Impact):\n{bullet_text}"
    response = await openai.ChatCompletion.acreate(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )
    return response.choices[0].message.content