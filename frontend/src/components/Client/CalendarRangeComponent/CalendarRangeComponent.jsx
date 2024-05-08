import React, { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays, startOfYear } from 'date-fns' // Importar startOfYear para iniciar en el 1 de enero del año actual

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export function CalendarRangeComponent() {
  // date state
  const [range, setRange] = useState([
    {
      startDate: startOfYear(new Date()), // Iniciar en el 1 de enero del año actual
      endDate: new Date(), // Terminar hoy
      key: 'selection',
    },
  ])

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener('keydown', hideOnEscape, true)
    document.addEventListener('click', hideOnClickOutside, true)

    // Cleanup
    return () => {
      document.removeEventListener('keydown', hideOnEscape, true)
      document.removeEventListener('click', hideOnClickOutside, true)
    }
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  const handleDateChange = (item) => {
    setRange([item.selection])
    console.log('Fecha 1:', item.selection.startDate)
    console.log('Fecha 2:', item.selection.endDate)
  }

  return (
    <div className="calendarWrap">
      <input
        value={`${format(range[0].startDate, 'yyyy-MM-dd')} to ${format(
          range[0].endDate,
          'yyyy-MM-dd'
        )}`}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={handleDateChange}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  )
}
