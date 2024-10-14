import psycopg2
import pandas as pd

connection_params = {
    'dbname': 'db0nt6kg4ai68o',
    'user': 'u8699envn618gc',
    'password': 'p4b300113f80427bc562f4f63d7b92e2ef96699a99105ece587c1047c56efa3d1',
    'host': 'c67okggoj39697.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    'port': '5432',
    'sslmode': 'require',
    'sslrootcert': 'none',
}

conn = psycopg2.connect(**connection_params)

cur = conn.cursor()

cur.execute('SELECT version();')
db_version = cur.fetchone()

print(f"Connected to PostgreSQL, version: {db_version}")

# cur.execute(create_table_query)
# conn.commit

# df = pd.read_csv('input.csv')

# for index, row in df.iterrows():
#     cur.execute("""
#     """
#     )

# conn.commit()
cur.close()
conn.close()