export class ObjectPathResolver {

  static getValue(obj: unknown, path: string): unknown | null {
    if (typeof obj !== 'object' || obj === null) {
      return null
    }

    const properties = path.split('.')

    function recursiveAccess(obj: any, properties: string[]): unknown | null {
      if (properties.length === 0) {
        return obj
      }

      const currentProperty = properties[0]
      const remainingProperties = properties.slice(1)

      if (typeof obj === 'object' && obj !== null && currentProperty in obj) {
        return recursiveAccess(
          (obj as { [index: string]: unknown })[currentProperty],
          remainingProperties
        )
      }

      return null
    }

    return recursiveAccess(obj, properties)
  }
}
