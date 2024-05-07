from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configuración de la base de datos (user:password@localhost/database)
MASTER_USER = 'admindb'
MASTER_PASSWORD = 'admin'
DATABASE_NAME = 'asteriskcdrdb'
DATABASE_IP = '192.168.100.250'

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{MASTER_USER}:{MASTER_PASSWORD}@{DATABASE_IP}/{DATABASE_NAME}'
db = SQLAlchemy(app)

# Definición del modelo de la tabla 'cdr'
class Cdr(db.Model):
    __tablename__ = 'cdr'
    calldate = db.Column(db.DateTime, primary_key=True)
    clid = db.Column(db.String(80))
    src = db.Column(db.String(80))
    dst = db.Column(db.String(80), index=True)
    dcontext = db.Column(db.String(80))
    channel = db.Column(db.String(80))
    dstchannel = db.Column(db.String(80))
    lastapp = db.Column(db.String(80))
    lastdata = db.Column(db.String(80))
    duration = db.Column(db.Integer)
    billsec = db.Column(db.Integer)
    disposition = db.Column(db.String(45))
    amaflags = db.Column(db.Integer)
    accountcode = db.Column(db.String(20), index=True)
    uniqueid = db.Column(db.String(32), index=True)
    userfield = db.Column(db.String(255))
    did = db.Column(db.String(50), index=True)
    recordingfile = db.Column(db.String(255), index=True)
    cnum = db.Column(db.String(80))
    cnam = db.Column(db.String(80))
    outbound_cnum = db.Column(db.String(80))
    outbound_cnam = db.Column(db.String(80))
    dst_cnam = db.Column(db.String(80))
    linkedid = db.Column(db.String(32))
    peeraccount = db.Column(db.String(80))
    sequence = db.Column(db.Integer)

    def __repr__(self):
        return f'<Cdr {self.calldate}>'

# Ruta para obtener todos los registros de la tabla 'cdr'
@app.route('/cdr', methods=['GET'])
def get_cdr():
    cdr_records = Cdr.query.all()
    output = []
    for cdr_record in cdr_records:
        cdr_data = {
            'calldate': cdr_record.calldate.strftime('%Y-%m-%d %H:%M:%S'),
            'clid': cdr_record.clid,
            'src': cdr_record.src,
            'dst': cdr_record.dst,
            'dcontext': cdr_record.dcontext,
            'channel': cdr_record.channel,
            'dstchannel': cdr_record.dstchannel,
            'lastapp': cdr_record.lastapp,
            'lastdata': cdr_record.lastdata,
            'duration': cdr_record.duration,
            'billsec': cdr_record.billsec,
            'disposition': cdr_record.disposition,
            'amaflags': cdr_record.amaflags,
            'accountcode': cdr_record.accountcode,
            'uniqueid': cdr_record.uniqueid,
            'userfield': cdr_record.userfield,
            'did': cdr_record.did,
            'recordingfile': cdr_record.recordingfile,
            'cnum': cdr_record.cnum,
            'cnam': cdr_record.cnam,
            'outbound_cnum': cdr_record.outbound_cnum,
            'outbound_cnam': cdr_record.outbound_cnam,
            'dst_cnam': cdr_record.dst_cnam,
            'linkedid': cdr_record.linkedid,
            'peeraccount': cdr_record.peeraccount,
            'sequence': cdr_record.sequence
        }
        output.append(cdr_data)
    return jsonify({'cdr_records': output})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
