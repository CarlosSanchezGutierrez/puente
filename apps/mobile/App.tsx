import { puenteActions, puenteBrand, puentePrinciples } from "@puente/brand";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const actions = puenteActions.slice(0, 4);
const colors = puenteBrand.colors;

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>PUENTE</Text>
          <Text style={styles.badge}>Tecnología, comunidad e infraestructura social</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.title}>
            Construimos puentes entre tecnología, conocimiento y proyectos sociales.
          </Text>

          <Text style={styles.description}>
            Puente es una plataforma de tecnología cívica para crear software social,
            fortalecer comunidades de aprendizaje, impulsar investigación aplicada y
            facilitar colaboración entre estudiantes, profesionales y organizaciones.
          </Text>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Quiero participar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardDark}>
          <Text style={styles.cardEyebrow}>Puente</Text>
          <Text style={styles.cardQuote}>
            Un sistema bien diseñado puede facilitar y multiplicar la capacidad de ayudar.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Acciones iniciales</Text>

          {actions.map((action) => (
            <View key={action.label} style={styles.actionItem}>
              <Text style={styles.actionText}>{action.label}</Text>
              <Text style={styles.arrow}>→</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Principios</Text>

          {puentePrinciples.map((principle) => (
            <View key={principle.title} style={styles.principleCard}>
              <Text style={styles.principleTitle}>{principle.title}</Text>
              <Text style={styles.principleText}>“{principle.text}”</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 24,
    paddingBottom: 48,
  },
  header: {
    gap: 12,
    marginBottom: 40,
  },
  logo: {
    color: colors.navy,
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 6,
  },
  badge: {
    alignSelf: "flex-start",
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    color: colors.muted,
    fontSize: 13,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  hero: {
    gap: 24,
    marginBottom: 28,
  },
  title: {
    color: colors.text,
    fontSize: 42,
    fontWeight: "700",
    letterSpacing: -1.4,
    lineHeight: 46,
  },
  description: {
    color: colors.muted,
    fontSize: 17,
    lineHeight: 28,
  },
  primaryButton: {
    alignSelf: "flex-start",
    backgroundColor: colors.navy,
    borderRadius: 999,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
  },
  cardDark: {
    backgroundColor: colors.navy,
    borderRadius: 28,
    marginBottom: 34,
    padding: 28,
  },
  cardEyebrow: {
    color: colors.paleBlue,
    fontSize: 12,
    letterSpacing: 4,
    marginBottom: 40,
    textTransform: "uppercase",
  },
  cardQuote: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 34,
  },
  section: {
    marginTop: 18,
  },
  sectionLabel: {
    color: colors.softMuted,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 3,
    marginBottom: 16,
    textTransform: "uppercase",
  },
  actionItem: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.72)",
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 16,
  },
  actionText: {
    color: colors.muted,
    flex: 1,
    fontSize: 15,
  },
  arrow: {
    color: colors.navy,
    fontSize: 18,
    fontWeight: "700",
  },
  principleCard: {
    backgroundColor: "rgba(255,255,255,0.72)",
    borderColor: colors.border,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 12,
    padding: 18,
  },
  principleTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 8,
  },
  principleText: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 25,
  },
});
