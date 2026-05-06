from alembic import op
import sqlalchemy as sa

revision = '001'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    op.create_table('users', ...)
    op.create_table('resumes', ...)

def downgrade():
    op.drop_table('resumes')
    op.drop_table('users')