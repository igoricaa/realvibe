export const hasTranslation = (t: any, key: string, slug: string) => {
  const value = t.raw(key);
  const wholeKey = `portfolio.${slug}.${key}`;

  return value !== wholeKey;
};

export const hasTranslationText = (list: any, key: string) => {
  const value = list[key];

  return value && Object.values(value).every((prop) => prop);
};

export const getTranslations = (t: any, slug: string) => {
  const translations = {
    title: hasTranslation(t, 'title', slug) && t('title'),
    subtitle: {
      one: hasTranslation(t, 'subtitle.one', slug)
        ? t('subtitle.one')
        : undefined,
      two: hasTranslation(t, 'subtitle.two', slug)
        ? t('subtitle.two')
        : undefined,
    },
    description: {
      title: t('description.title'),
      text: [
        hasTranslation(t, 'description.text.one', slug) &&
          t('description.text.one'),
        hasTranslation(t, 'description.text.two', slug) &&
          t('description.text.two'),
        hasTranslation(t, 'description.text.three', slug) &&
          t('description.text.three'),
      ],
    },
    challenge: {
      title: hasTranslation(t, 'challenge.title', slug) && t('challenge.title'),
      text: hasTranslation(t, 'challenge.text', slug) && t('challenge.text'),
    },
    outcome: {
      title: hasTranslation(t, 'outcome.title', slug) && t('outcome.title'),
      text: hasTranslation(t, 'outcome.text', slug) && t('outcome.text'),
    },
    team: {
      title: hasTranslation(t, 'team.title', slug) && t('team.title'),
      list: {
        production: {
          title:
            hasTranslation(t, 'team.list.production.title', slug) &&
            t('team.list.production.title'),
          person:
            hasTranslation(t, 'team.list.production.person', slug) &&
            t('team.list.production.person'),
        },
        producer: {
          title:
            hasTranslation(t, 'team.list.producer.title', slug) &&
            t('team.list.producer.title'),
          person:
            hasTranslation(t, 'team.list.producer.person', slug) &&
            t('team.list.producer.person'),
        },
        photoDirector: {
          title:
            hasTranslation(t, 'team.list.photoDirector.title', slug) &&
            t('team.list.photoDirector.title'),
          person:
            hasTranslation(t, 'team.list.photoDirector.person', slug) &&
            t('team.list.photoDirector.person'),
        },
        videoDirectors: {
          title:
            hasTranslation(t, 'team.list.videoDirectors.title', slug) &&
            t('team.list.videoDirectors.title'),
          person:
            hasTranslation(t, 'team.list.videoDirectors.person', slug) &&
            t('team.list.videoDirectors.person'),
        },
        artDirectorScenographer: {
          title:
            hasTranslation(
              t,
              'team.list.artDirectorScenographer.title',
              slug
            ) && t('team.list.artDirectorScenographer.title'),
          person:
            hasTranslation(
              t,
              'team.list.artDirectorScenographer.person',
              slug
            ) && t('team.list.artDirectorScenographer.person'),
        },
        assistantScenographer: {
          title:
            hasTranslation(t, 'team.list.assistantScenographer.title', slug) &&
            t('team.list.assistantScenographer.title'),
          person:
            hasTranslation(t, 'team.list.assistantScenographer.person', slug) &&
            t('team.list.assistantScenographer.person'),
        },
        setDecorator: {
          title:
            hasTranslation(t, 'team.list.setDecorator.title', slug) &&
            t('team.list.setDecorator.title'),
          person:
            hasTranslation(t, 'team.list.setDecorator.person', slug) &&
            t('team.list.setDecorator.person'),
        },
        cameraOperator: {
          title:
            hasTranslation(t, 'team.list.cameraOperator.title', slug) &&
            t('team.list.cameraOperator.title'),
          person:
            hasTranslation(t, 'team.list.cameraOperator.person', slug) &&
            t('team.list.cameraOperator.person'),
        },
        costume: {
          title:
            hasTranslation(t, 'team.list.costume.title', slug) &&
            t('team.list.costume.title'),
          person:
            hasTranslation(t, 'team.list.costume.person', slug) &&
            t('team.list.costume.person'),
        },
        fashionDesigner: {
          title:
            hasTranslation(t, 'team.list.fashionDesigner.title', slug) &&
            t('team.list.fashionDesigner.title'),
          person:
            hasTranslation(t, 'team.list.fashionDesigner.person', slug) &&
            t('team.list.fashionDesigner.person'),
        },
        stylist: {
          title:
            hasTranslation(t, 'team.list.stylist.title', slug) &&
            t('team.list.stylist.title'),
          person:
            hasTranslation(t, 'team.list.stylist.person', slug) &&
            t('team.list.stylist.person'),
        },
        hairStylist: {
          title:
            hasTranslation(t, 'team.list.hairStylist.title', slug) &&
            t('team.list.hairStylist.title'),
          person:
            hasTranslation(t, 'team.list.hairStylist.person', slug) &&
            t('team.list.hairStylist.person'),
        },
        makeup: {
          title:
            hasTranslation(t, 'team.list.makeup.title', slug) &&
            t('team.list.makeup.title'),
          person:
            hasTranslation(t, 'team.list.makeup.person', slug) &&
            t('team.list.makeup.person'),
        },
        gaffer: {
          title:
            hasTranslation(t, 'team.list.gaffer.title', slug) &&
            t('team.list.gaffer.title'),
          person:
            hasTranslation(t, 'team.list.gaffer.person', slug) &&
            t('team.list.gaffer.person'),
        },
        sarfer: {
          title:
            hasTranslation(t, 'team.list.sarfer.title', slug) &&
            t('team.list.sarfer.title'),
          person:
            hasTranslation(t, 'team.list.sarfer.person', slug) &&
            t('team.list.sarfer.person'),
        },
        photographer: {
          title:
            hasTranslation(t, 'team.list.photographer.title', slug) &&
            t('team.list.photographer.title'),
          person:
            hasTranslation(t, 'team.list.photographer.person', slug) &&
            t('team.list.photographer.person'),
        },
        cameraRental: {
          title:
            hasTranslation(t, 'team.list.cameraRental.title', slug) &&
            t('team.list.cameraRental.title'),
          person:
            hasTranslation(t, 'team.list.cameraRental.person', slug) &&
            t('team.list.cameraRental.person'),
        },
        bts: {
          title:
            hasTranslation(t, 'team.list.bts.title', slug) &&
            t('team.list.bts.title'),
          person:
            hasTranslation(t, 'team.list.bts.person', slug) &&
            t('team.list.bts.person'),
        },
        dancer: {
          title:
            hasTranslation(t, 'team.list.dancer.title', slug) &&
            t('team.list.dancer.title'),
          person:
            hasTranslation(t, 'team.list.dancer.person', slug) &&
            t('team.list.dancer.person'),
        },
        actor: {
          title:
            hasTranslation(t, 'team.list.actor.title', slug) &&
            t('team.list.actor.title'),
          person:
            hasTranslation(t, 'team.list.actor.person', slug) &&
            t('team.list.actor.person'),
        },
        trumpet: {
          title:
            hasTranslation(t, 'team.list.trumpet.title', slug) &&
            t('team.list.trumpet.title'),
          person:
            hasTranslation(t, 'team.list.trumpet.person', slug) &&
            t('team.list.trumpet.person'),
        },
        technics: {
          title:
            hasTranslation(t, 'team.list.technics.title', slug) &&
            t('team.list.technics.title'),
          person:
            hasTranslation(t, 'team.list.technics.person', slug) &&
            t('team.list.technics.person'),
        },
        agencyextra: {
          title:
            hasTranslation(t, 'team.list.agencyextra.title', slug) &&
            t('team.list.agencyextra.title'),
          person:
            hasTranslation(t, 'team.list.agencyextra.person', slug) &&
            t('team.list.agencyextra.person'),
        },
        productionAssistant: {
          title:
            hasTranslation(t, 'team.list.productionAssistant.title', slug) &&
            t('team.list.productionAssistant.title'),
          person:
            hasTranslation(t, 'team.list.productionAssistant.person', slug) &&
            t('team.list.productionAssistant.person'),
        },
        dancers: {
          title:
            hasTranslation(t, 'team.list.dancers.title', slug) &&
            t('team.list.dancers.title'),
          person:
            hasTranslation(t, 'team.list.dancers.person', slug) &&
            t('team.list.dancers.person'),
        },
        guitarists: {
          title:
            hasTranslation(t, 'team.list.guitarists.title', slug) &&
            t('team.list.guitarists.title'),
          person:
            hasTranslation(t, 'team.list.guitarists.person', slug) &&
            t('team.list.guitarists.person'),
        },
        woman: {
          title:
            hasTranslation(t, 'team.list.woman.title', slug) &&
            t('team.list.woman.title'),
          person:
            hasTranslation(t, 'team.list.woman.person', slug) &&
            t('team.list.woman.person'),
        },
        extra: {
          title:
            hasTranslation(t, 'team.list.extra.title', slug) &&
            t('team.list.extra.title'),
          person:
            hasTranslation(t, 'team.list.extra.person', slug) &&
            t('team.list.extra.person'),
        },
        lenka: {
          title:
            hasTranslation(t, 'team.list.lenka.title', slug) &&
            t('team.list.lenka.title'),
          person:
            hasTranslation(t, 'team.list.lenka.person', slug) &&
            t('team.list.lenka.person'),
        },
        tamburaPlayers: {
          title:
            hasTranslation(t, 'team.list.tamburaPlayers.title', slug) &&
            t('team.list.tamburaPlayers.title'),
          person:
            hasTranslation(t, 'team.list.tamburaPlayers.person', slug) &&
            t('team.list.tamburaPlayers.person'),
        },
        tavernGuests: {
          title:
            hasTranslation(t, 'team.list.tavernGuests.title', slug) &&
            t('team.list.tavernGuests.title'),
          person:
            hasTranslation(t, 'team.list.tavernGuests.person', slug) &&
            t('team.list.tavernGuests.person'),
        },
      },
    },
  };

  return translations;
};
