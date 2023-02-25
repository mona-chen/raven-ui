import React from 'react'

type Props = any

const RavenBreadCrumbs = ({ color, list, className, onClick }: Props) => {
  return (
    <div className={`bread-crumb-parent ${className}`}>
      {list &&
        list?.map((chi: any, idx: any) => {
          //   console.log(list?.length);
          // console.log(idx);
          const { label, active } = chi
          return (
            <React.Fragment key={idx}>
              <div
                onClick={() => {
                  onClick && onClick(chi)
                }}
                className={`crumb-step ${active && `crumb-step-active__${color}`}`}
              >
                {label || chi}
              </div>
              {Number(list?.length) - 1 !== Number(idx) && (
                <svg className={`crumb-arrow__${color}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'>
                  <path d='M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' />
                </svg>
              )}
            </React.Fragment>
          )
        })}
    </div>
  )
}

export default RavenBreadCrumbs
