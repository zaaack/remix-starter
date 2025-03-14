import React, { Suspense, useMemo } from 'react'
import { ClientOnly } from 'remix-utils/client-only'
export type LoadFn<T> = () => Promise<{ default: React.ComponentType<T> }>
export function importClientComp<T>(load: LoadFn<T>) {
  const Comp = React.lazy(load)
  function Wraped(props: T) {
    return (
      <ClientOnly>
        {() => (
          <Suspense fallback={<div className="text-center pt-10">加载中...</div>}>
            <Comp {...(props as any)} />
          </Suspense>
        )}
      </ClientOnly>
    )
  }
  Wraped.displayName = Comp.name
  return Wraped
}

export type Props<T> = {
  load: LoadFn<T>
  children: (Comp: React.ComponentType<T>) => React.ReactNode
}
export function ClientComp<T>({ load: load, ...props }: Props<T>) {
  const Comp = useMemo(() => importClientComp<T>(load), [])
  return props.children(Comp)
}
