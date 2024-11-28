export default function query(slug) {

	return `
		query {
			acfOptionsGlobalOptions {
				global {
				  address
				  copyRight
				  email
				  telephone
				  facebook
				  twitter
				  instagram
				  youtube
				  navigation {
					page {
					  ... on Page {
						slug
						title
					  }
					},
					label,
					id
				  }					
				}
			}
			content: pages(where: {name: "${slug}"}) {
				edges {
					node {
					slug
					title
					homePage {
						carousel {
						  altText
						  sourceUrl
						  mediaDetails {
							width
							height
						  }
						}
					}					
					content_blocks {
						desktopHeaderImage {
							altText
							sourceUrl
							mediaDetails {
								width
								height
							}
						}
						mobileHeaderImage {
							altText
							sourceUrl
							mediaDetails {
								width
								height
							}
						}
						modules {
							moduleType
							marginLeft
							label
							text
							videoUrl
							imagesLayout
							imagePadding
							images {
								image {
									altText
									databaseId
									sourceUrl
									mediaDetails {
										width
										height
									}
								}
								linkLabel
								linkPage {
									... on Page {
									  slug
									  title
									}
								}
							}
							thumbnails {
								image {
									altText
									sourceUrl
									mediaDetails {
										width
										height
									}
								}
								description
							}
							bios {
								photo {
									altText
									sourceUrl
									mediaDetails {
										width
										height
									}
								}
								name
								bio
							}
							articles {
								photo {
									altText
									sourceUrl
									mediaDetails {
										width
										height
									}
								}
								headline
								text
							}								
							image {
								altText
								sourceUrl
								mediaDetails {
								  width
								  height
								}
							}
							headline
							linkLabel
							linkPage {
								... on Page {
								  slug
								  title
								}
							}
							quotes {
								quote
								authorLine1
								authorLine2
							}
							slider {
								altText
								sourceUrl
								mediaDetails {
								  width
								  height
								}
								customImagesFields {
									linkto {
										... on Page {
											slug
											title
										}
									}
									anchor
								}
							}
						}
					}
					seo {
						title
						metaDesc
						metaKeywords
					}
					buttons {
						next {
						  ... on Page {
							slug
							title
						  }
						}
						previous {
						  ... on Page {
							slug
							title
						  }
						}
					}
					}
				}
			}
		}
	`.replace(/\s\s+/g, ' ');
}
