const SUPERSCRIPT_NODE = 'superscriptText'
const SUBSCRIPT_NODE = 'subscriptText'
const INLINE_SUP_SUB_PATTERN = /(?<!\^)\^([^^\n]+)\^(?!\^)|(?<!~)~([^~\n]+)~(?!~)/g

const isWrappedWithSpace = (value) => /^\s|\s$/.test(value)

const parseInlineSupSub = (value) => {
  if (typeof value !== 'string' || value.length === 0) return null

  const nodes = []
  let hasReplacement = false
  let cursor = 0

  for (const match of value.matchAll(INLINE_SUP_SUB_PATTERN)) {
    const index = Number(match.index)
    if (!Number.isFinite(index)) continue

    if (index > cursor) {
      nodes.push({ type: 'text', value: value.slice(cursor, index) })
    }

    const token = match[0] ?? ''
    const superscriptValue = match[1]
    const subscriptValue = match[2]
    const tokenValue = superscriptValue ?? subscriptValue ?? ''
    const tokenType = superscriptValue !== undefined ? SUPERSCRIPT_NODE : SUBSCRIPT_NODE

    if (tokenValue.length === 0 || isWrappedWithSpace(tokenValue)) {
      nodes.push({ type: 'text', value: token })
    } else {
      nodes.push({ type: tokenType, value: tokenValue })
      hasReplacement = true
    }

    cursor = index + token.length
  }

  if (cursor < value.length) {
    nodes.push({ type: 'text', value: value.slice(cursor) })
  }

  return hasReplacement ? nodes : null
}

const transformTree = (node) => {
  if (!node || !Array.isArray(node.children)) return

  const nextChildren = []

  node.children.forEach((child) => {
    if (child?.type === 'text' && typeof child.value === 'string') {
      const transformed = parseInlineSupSub(child.value)
      if (transformed) {
        nextChildren.push(...transformed)
        return
      }
    }

    transformTree(child)
    nextChildren.push(child)
  })

  node.children = nextChildren
}

export const supSubHandlers = {
  [SUPERSCRIPT_NODE]: (_state, node) => ({
    type: 'element',
    tagName: 'sup',
    properties: {},
    children: [{ type: 'text', value: node.value ?? '' }],
  }),
  [SUBSCRIPT_NODE]: (_state, node) => ({
    type: 'element',
    tagName: 'sub',
    properties: {},
    children: [{ type: 'text', value: node.value ?? '' }],
  }),
}

export default function remarkSupSub() {
  return (tree) => {
    transformTree(tree)
  }
}
