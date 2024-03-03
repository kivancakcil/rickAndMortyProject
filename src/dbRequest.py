import sqlite3
import requests

conn = sqlite3.connect('rick_and_morty.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS Character (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                status TEXT,
                species TEXT,
                gender TEXT,
                origin TEXT,
                location TEXT,
                image_url TEXT
            )''')

def fetch_characters(start_id, end_id):
    characters = []
    for character_id in range(start_id, end_id + 1):
        response = requests.get(f'https://rickandmortyapi.com/api/character/{character_id}')
        if response.status_code == 200:
            character_data = response.json()
            character_info = (character_data['id'], character_data['name'], character_data['status'], character_data['species'],
                              character_data['gender'], character_data['origin']['name'], character_data['location']['name'],
                              character_data['image'])
            characters.append(character_info)
    return characters

start_character_id = 1
end_character_id = 826
characters_to_fetch = fetch_characters(start_character_id, end_character_id)
for character_info in characters_to_fetch:
    character_id = character_info[0]
    c.execute("SELECT id FROM Character WHERE id=?", (character_id,))
    existing_character = c.fetchone()
    if existing_character is None:
        c.execute("INSERT INTO Character (id, name, status, species, gender, origin, location, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", character_info)

conn.commit()
conn.close()

