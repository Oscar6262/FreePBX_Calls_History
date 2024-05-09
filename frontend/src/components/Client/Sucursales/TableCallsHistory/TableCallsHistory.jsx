import React, { useEffect } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import './TableCallsHistory.scss'
import { CalendarRangeComponent } from '../../main'

export function TableCallsHistory(props) {
  const {
    filtroSucursal,
    filtroResponse,
    // filtroSrc,
    // filtroDst,
    filtroDateOne,
    filtroDateTwo,
    filtroExtencionSrc,
    filtroExtencionDst,
  } = props

  const calls = {
    cdr_records: [
      {
        calldate: '2024-04-14 20:27:25',
        disposition: 'NO ANSWER',
        dst: '101',
        duration: 2,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 20:27:46',
        disposition: 'NO ANSWER',
        dst: '0123456789',
        duration: 8,
        src: '201',
      },
      {
        calldate: '2024-04-14 20:27:46',
        disposition: 'NO ANSWER',
        dst: '201',
        duration: 8,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 20:28:45',
        disposition: 'NO ANSWER',
        dst: '201',
        duration: 4,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 20:29:45',
        disposition: 'ANSWERED',
        dst: '201',
        duration: 8,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:02:00',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 4,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:02:25',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 4,
        src: '442920001222',
      },
      {
        calldate: '2024-04-14 23:13:30',
        disposition: 'ANSWERED',
        dst: '477',
        duration: 1,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:13:37',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:14:17',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 1,
        src: '442920001333',
      },
      {
        calldate: '2024-04-14 23:14:20',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '442920001333',
      },
      {
        calldate: '2024-04-14 23:22:59',
        disposition: 'NO ANSWER',
        dst: '101',
        duration: 2,
        src: '',
      },
      {
        calldate: '2024-04-14 23:24:12',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 2,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:24:24',
        disposition: 'ANSWERED',
        dst: '687132562',
        duration: 11,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:24:52',
        disposition: 'NO ANSWER',
        dst: '6871322562',
        duration: 9,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:25:12',
        disposition: 'NO ANSWER',
        dst: '6871322562',
        duration: 8,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:28:58',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 4,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:29:46',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:50:24',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 4,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:53:15',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:53:25',
        disposition: 'ANSWERED',
        dst: '200',
        duration: 7,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:54:49',
        disposition: 'ANSWERED',
        dst: '200',
        duration: 1,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:54:57',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:55:59',
        disposition: 'ANSWERED',
        dst: '200',
        duration: 1,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:56:06',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:57:35',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:59:43',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-14 23:59:52',
        disposition: 'NO ANSWER',
        dst: '203',
        duration: 2,
        src: '0123456789',
      },
      {
        calldate: '2024-04-15 00:07:49',
        disposition: 'ANSWERED',
        dst: '2001',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-15 00:19:47',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 21,
        src: '101',
      },
      {
        calldate: '2024-04-15 00:20:02',
        disposition: 'ANSWERED',
        dst: '123456789012',
        duration: 6,
        src: '101',
      },
      {
        calldate: '2024-04-15 00:20:18',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 4,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 00:22:53',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 4,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 00:24:10',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 4,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 00:24:37',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 00:24:45',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 00:34:41',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 5,
        src: '6871322562',
      },
      {
        calldate: '2024-04-15 00:34:48',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 00:34:57',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 4,
        src: '203',
      },
      {
        calldate: '2024-04-15 00:41:07',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '6871322562',
      },
      {
        calldate: '2024-04-15 00:41:27',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-15 00:42:39',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '6871322562',
      },
      {
        calldate: '2024-04-15 02:00:39',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 3,
        src: '101',
      },
      {
        calldate: '2024-04-15 02:00:47',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 4,
        src: '0123456789',
      },
      {
        calldate: '2024-04-15 02:00:56',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 2,
        src: '101',
      },
      {
        calldate: '2024-04-15 02:10:40',
        disposition: 'ANSWERED',
        dst: '162',
        duration: 7,
        src: '0123456789',
      },
      {
        calldate: '2024-04-15 02:11:49',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 5,
        src: '6871322562',
      },
      {
        calldate: '2024-04-15 02:12:59',
        disposition: 'ANSWERED',
        dst: '667',
        duration: 4,
        src: '0123456789',
      },
      {
        calldate: '2024-04-15 02:17:09',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 1,
        src: '203',
      },
      {
        calldate: '2024-04-15 02:22:36',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 14,
        src: '6871322562',
      },
      {
        calldate: '2024-04-15 02:32:20',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 03:43:33',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 4,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 05:53:56',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 05:54:06',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 4,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 05:54:15',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 05:54:30',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 8,
        src: '101',
      },
      {
        calldate: '2024-04-15 05:56:10',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 4,
        src: '0123456789',
      },
      {
        calldate: '2024-04-15 05:57:21',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 3,
        src: '0123456789',
      },
      {
        calldate: '2024-04-15 06:04:37',
        disposition: 'ANSWERED',
        dst: '777',
        duration: 6,
        src: '0123456789',
      },
      {
        calldate: '2024-04-15 06:07:30',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 06:10:10',
        disposition: 'NO ANSWER',
        dst: '101',
        duration: 1,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 06:10:58',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 06:11:08',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 1,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 06:11:14',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 1,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 06:12:01',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 2,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 06:14:10',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 06:15:29',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 1,
        src: '02062002',
      },
      {
        calldate: '2024-04-15 06:19:03',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 2,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 00:44:56',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 32,
        src: '102',
      },
      {
        calldate: '2024-04-16 00:45:10',
        disposition: 'NO ANSWER',
        dst: '321',
        duration: 2,
        src: '102',
      },
      {
        calldate: '2024-04-16 00:46:00',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 32,
        src: '102',
      },
      {
        calldate: '2024-04-16 00:46:15',
        disposition: 'FAILED',
        dst: '321',
        duration: 4,
        src: '102',
      },
      {
        calldate: '2024-04-16 00:50:35',
        disposition: 'ANSWERED',
        dst: '321',
        duration: 32,
        src: '102',
      },
      {
        calldate: '2024-04-16 00:50:49',
        disposition: 'FAILED',
        dst: '321',
        duration: 4,
        src: '102',
      },
      {
        calldate: '2024-04-16 00:51:44',
        disposition: 'FAILED',
        dst: '321',
        duration: 18,
        src: '102',
      },
      {
        calldate: '2024-04-16 00:52:03',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 13,
        src: '102',
      },
      {
        calldate: '2024-04-16 01:04:53',
        disposition: 'BUSY',
        dst: '6682236754',
        duration: 11,
        src: '101',
      },
      {
        calldate: '2024-04-16 01:05:05',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 0,
        src: '101',
      },
      {
        calldate: '2024-04-16 01:07:42',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 01:16:28',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 01:34:08',
        disposition: 'BUSY',
        dst: '6682236754',
        duration: 14,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 01:34:22',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 0,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 01:34:01',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 01:38:33',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 01:38:40',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 01:40:19',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 01:41:46',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 01:41:49',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 04:22:42',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 8,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 04:23:11',
        disposition: 'BUSY',
        dst: '6682236754',
        duration: 25,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 04:23:37',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 0,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 04:30:25',
        disposition: 'BUSY',
        dst: '6682236754',
        duration: 21,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 04:30:47',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 0,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 04:30:49',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:36:18',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:38:49',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:39:07',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 33,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:40:02',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:40:16',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 34,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:40:32',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:41:04',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:41:46',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:45:20',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:49:44',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:50:50',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:52:20',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:53:53',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:54:30',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:54:42',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:56:55',
        disposition: 'NO ANSWER',
        dst: '6871322563',
        duration: 0,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:57:03',
        disposition: 'NO ANSWER',
        dst: '6871322563',
        duration: 0,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:58:25',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:58:40',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 06:59:38',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 07:01:06',
        disposition: 'NO ANSWER',
        dst: '6871322563',
        duration: 0,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 07:02:15',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 07:12:29',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 07:13:46',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 07:35:49',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 6,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 07:35:42',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 07:36:02',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-16 07:43:47',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 6,
        src: '6871252692',
      },
      {
        calldate: '2024-04-16 07:44:41',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 7,
        src: '6871252692',
      },
      {
        calldate: '2024-04-16 07:44:52',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 4,
        src: '6871252692',
      },
      {
        calldate: '2024-04-16 07:45:00',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 2,
        src: '6871252692',
      },
      {
        calldate: '2024-04-16 07:47:25',
        disposition: 'BUSY',
        dst: '6682236754',
        duration: 8,
        src: '6871252692',
      },
      {
        calldate: '2024-04-16 07:47:34',
        disposition: 'BUSY',
        dst: '6682236754',
        duration: 4,
        src: '6871252692',
      },
      {
        calldate: '2024-04-16 07:47:39',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 18,
        src: '6871252692',
      },
      {
        calldate: '1000-01-01 00:00:00',
        disposition: '',
        dst: '',
        duration: 0,
        src: '',
      },
      {
        calldate: '2024-04-17 03:28:13',
        disposition: 'ANSWERED',
        dst: '66872236754',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 03:29:33',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 03:30:31',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 6,
        src: '6871252692',
      },
      {
        calldate: '2024-04-17 03:31:38',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 32,
        src: '6871252692',
      },
      {
        calldate: '2024-04-17 04:09:00',
        disposition: 'NO ANSWER',
        dst: '911',
        duration: 1,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 04:15:29',
        disposition: 'NO ANSWER',
        dst: '911',
        duration: 6,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:13:37',
        disposition: 'NO ANSWER',
        dst: '911',
        duration: 2,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:32:44',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:33:53',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:34:04',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:34:46',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:41:02',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 10,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:44:12',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 8,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:44:30',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 8,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:45:15',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 8,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:46:44',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 8,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 18:59:19',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 8,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:00:09',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 8,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:01:04',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 27,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:02:45',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 14,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:03:05',
        disposition: 'NO ANSWER',
        dst: '6871322562',
        duration: 5,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:03:23',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:04:34',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 26,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:06:30',
        disposition: 'ANSWERED',
        dst: '911',
        duration: 8,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:06:44',
        disposition: 'BUSY',
        dst: '911',
        duration: 1,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:06:45',
        disposition: 'ANSWERED',
        dst: '911',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:18:16',
        disposition: 'BUSY',
        dst: '911',
        duration: 4,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:18:21',
        disposition: 'ANSWERED',
        dst: '911',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:19:15',
        disposition: 'ANSWERED',
        dst: '*97',
        duration: 34,
        src: '911',
      },
      {
        calldate: '2024-04-17 19:20:13',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 27,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:21:51',
        disposition: 'ANSWERED',
        dst: '*97',
        duration: 14,
        src: '911',
      },
      {
        calldate: '2024-04-17 19:36:40',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 25,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:38:13',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 27,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:38:51',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 13,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:40:04',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 26,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:41:25',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 31,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:42:00',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 13,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:48:13',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 14,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:49:19',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 14,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:49:55',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 63,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 19:51:18',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 14,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 20:07:26',
        disposition: 'ANSWERED',
        dst: '911',
        duration: 17,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 20:11:35',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '6871322562',
      },
      {
        calldate: '2024-04-17 20:14:01',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '6871322562',
      },
      {
        calldate: '2024-04-17 20:15:05',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '6871322562',
      },
      {
        calldate: '2024-04-17 20:16:40',
        disposition: 'NO ANSWER',
        dst: '105',
        duration: 1,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 20:18:26',
        disposition: 'ANSWERED',
        dst: '911',
        duration: 19,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 20:19:43',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '6871322562',
      },
      {
        calldate: '2024-04-17 20:20:23',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '6871322562',
      },
      {
        calldate: '2024-04-17 20:41:33',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 20:46:54',
        disposition: 'ANSWERED',
        dst: 's',
        duration: 15,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 20:55:10',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 51,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:01:27',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:02:55',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:03:43',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 122,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:05:51',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 82,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:07:58',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 87,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:09:32',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:09:45',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 44,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:16:55',
        disposition: 'ANSWERED',
        dst: '911',
        duration: 24,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:16:41',
        disposition: 'BUSY',
        dst: '911',
        duration: 2,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:16:43',
        disposition: 'ANSWERED',
        dst: '911',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:17:59',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 66,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:19:29',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 48,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:20:59',
        disposition: 'NO ANSWER',
        dst: '6871322562',
        duration: 3,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:20:00',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:21:09',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 32,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:22:29',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 12,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:25:46',
        disposition: 'ANSWERED',
        dst: '911',
        duration: 20,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:27:01',
        disposition: 'ANSWERED',
        dst: '02062002',
        duration: 0,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:27:05',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 7,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:28:33',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 66,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:30:21',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:31:23',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 30,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:32:46',
        disposition: 'ANSWERED',
        dst: '6682236754',
        duration: 7,
        src: '6871322562',
      },
      {
        calldate: '2024-04-17 21:34:10',
        disposition: 'ANSWERED',
        dst: '6871322562',
        duration: 26,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:33:23',
        disposition: 'BUSY',
        dst: '911',
        duration: 9,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:33:33',
        disposition: 'ANSWERED',
        dst: '911',
        duration: 64,
        src: '02062002',
      },
      {
        calldate: '2024-04-17 21:36:44',
        disposition: 'ANSWERED',
        dst: '6871322563',
        duration: 145,
        src: '02062002',
      },
    ],
  }

  console.log(filtroExtencionSrc)
  // filtroSucursal === '1'
  //   ? console.log('Guasave')
  //   : filtroSucursal === '2'
  //   ? console.log('Mochis')
  //   : filtroSucursal === '3'
  //   ? console.log('Culiacan')
  //   : null

  return (
    <>
      {/* <CalendarRangeComponent /> */}

      <Table className="table-calls-history-client">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>calldate</Table.HeaderCell>
            <Table.HeaderCell>src</Table.HeaderCell>
            <Table.HeaderCell>dst</Table.HeaderCell>
            <Table.HeaderCell>duration</Table.HeaderCell>
            <Table.HeaderCell>disposition</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* <Table.HeaderCell>Text</Table.HeaderCell>
          <Table.HeaderCell>T</Table.HeaderCell> */}

          {filtroResponse === null &&
          filtroSucursal === null &&
          filtroExtencionSrc === null &&
          filtroExtencionDst === null &&
          filtroDateOne === null &&
          filtroDateTwo === null
            ? // Mostrar todos los datos
              calls.cdr_records.map((call, index) => (
                <Table.Row key={index}>
                  <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                  <Table.HeaderCell>{call.src}</Table.HeaderCell>
                  <Table.HeaderCell>{call.dst}</Table.HeaderCell>
                  <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                  <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                </Table.Row>
              ))
            : filtroExtencionSrc !== null && filtroExtencionDst === null
            ? // Mostrar solo los datos sean igual a la extencion src
              calls.cdr_records
                .filter((call) => call.src === filtroExtencionSrc)
                .map((call, index) => (
                  <Table.Row key={index}>
                    <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                    <Table.HeaderCell>{call.src}</Table.HeaderCell>
                    <Table.HeaderCell>{call.dst}</Table.HeaderCell>
                    <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                    <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                  </Table.Row>
                ))
            : filtroExtencionSrc === null && filtroExtencionDst !== null
            ? // Mostrar solo los datos sean igual a la extencion dst
              calls.cdr_records
                .filter((call) => call.src === filtroExtencionDst)
                .map((call, index) => (
                  <Table.Row key={index}>
                    <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                    <Table.HeaderCell>{call.src}</Table.HeaderCell>
                    <Table.HeaderCell>{call.dst}</Table.HeaderCell>
                    <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                    <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                  </Table.Row>
                ))
            : filtroExtencionSrc !== null && filtroExtencionDst !== null
            ? // Mostrar solo los datos sean iguales a las extenciones
              calls.cdr_records
                .filter(
                  (call) =>
                    call.src === filtroExtencionSrc &&
                    call.dst === filtroExtencionDst
                )
                .map((call, index) => (
                  <Table.Row key={index}>
                    <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                    <Table.HeaderCell>{call.src}</Table.HeaderCell>
                    <Table.HeaderCell>{call.dst}</Table.HeaderCell>
                    <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                    <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                  </Table.Row>
                ))
            : filtroResponse === null && filtroSucursal !== null
            ? // Mostrar solo los datos donde filtroSucursal sea igual al primer número de src
              calls.cdr_records
                .filter((call) => call.src.charAt(0) === filtroSucursal)
                .map((call, index) => (
                  <Table.Row key={index}>
                    <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                    <Table.HeaderCell>{call.src}</Table.HeaderCell>
                    <Table.HeaderCell>{call.dst}</Table.HeaderCell>
                    <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                    <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                  </Table.Row>
                ))
            : filtroResponse !== null && filtroSucursal === null
            ? // Mostrar solo los datos donde filtroResponse sea igual a call.disposition
              calls.cdr_records
                .filter((call) => call.disposition === filtroResponse)
                .map((call, index) => (
                  <Table.Row key={index}>
                    <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                    <Table.HeaderCell>{call.src}</Table.HeaderCell>
                    <Table.HeaderCell>{call.dst}</Table.HeaderCell>
                    <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                    <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                  </Table.Row>
                ))
            : // Mostrar solo los datos que coincidan con filtroResponse y filtroSucursal
              calls.cdr_records
                .filter(
                  (call) =>
                    call.disposition === filtroResponse &&
                    call.src.charAt(0) === filtroSucursal
                )
                .map((call, index) => (
                  <Table.Row key={index}>
                    <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                    <Table.HeaderCell>{call.src}</Table.HeaderCell>
                    <Table.HeaderCell>{call.dst}</Table.HeaderCell>
                    <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                    <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                  </Table.Row>
                ))}
          {/* {map(calls.users, (call, index) => console.log(call.id))} */}
        </Table.Body>
      </Table>
    </>
  )
}
